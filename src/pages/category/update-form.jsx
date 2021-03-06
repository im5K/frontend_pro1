import React, { Component } from 'react'
import {
    Form,
    Select,
    Input,
    message
} from 'antd'
import PropTypes from 'prop-types'


const Item = Form.Item
const Option = Select.Option
class UpdateForm extends Component {
    static propTypes = {
        categoryName: PropTypes.string.isRequired,
        setForm: PropTypes.func.isRequired
    }
    componentWillMount(){
        //将form对象传递给父组件
        this.props.setForm(this.props.form)
    }
    render() {
        const {categoryName} = this.props 
        const { getFieldDecorator } = this.props.form

        return (

            <Form>
                
                {
                    getFieldDecorator("categoryName", {
                        rules: [
                            { required: true, message: '必须输入分类名称' },
                            
                        ],
                         initialValue: categoryName, 
                        
                        })(
                        <Input placeholder='请输入分类名称'></Input>
                    )
                }

            </Form>
        )
    }
}



export default Form.create()(UpdateForm) 