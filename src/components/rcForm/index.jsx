import React, { Component } from 'react'
import { createForm, formShape } from 'rc-form';

class index extends React.Component {
    static propTypes = {
        form: formShape,
    };

    submit = () => {
        console.log("form", this.props.form)
        this.props.form.validateFields((error, value) => {
            console.log('error ...', error);
            console.log('value ...', value);
        });
    }

    handleOther = (ev)=>{
        console.log(ev)
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div style={{ padding: '20px' }}>
                姓名：<input {...getFieldProps('name', { initialValue: '' })} /> <br /><br />
                年龄：<input {...getFieldProps('age', {
                    initialValue: '',
                    onChange(ev) { 
                        console.log("ev ...",ev)
                    }, // have to write original onChange here if you need
                    rules: [{ required: true, message: '名称不能为空' }],
                })} /><br /><br />

                其它：<input {...getFieldProps('other', {
                    initialValue:'',
                })} />

                <p>
                    {
                        getFieldError('name'),
                        getFieldError('age')
                    }
                </p>

                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}

export default createForm()(index);