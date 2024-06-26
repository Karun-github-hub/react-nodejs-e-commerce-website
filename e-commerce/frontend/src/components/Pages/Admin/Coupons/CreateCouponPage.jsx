import Form from "antd/es/form/Form"
import Input from "antd/es/input/Input"
import { Button, Spin, message } from "antd"
import { useState } from "react"
import { InputNumber } from "antd"


const CreateCouponPage = () => {
    const [loading, setLoading] = useState(false)
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [form] = Form.useForm()
    const onFinish = async (values) => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/coupons`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                message.success("Kupon başarıyla oluşturuldu.")
                form.resetFields() 
            } else {
                message.error("Kupon oluşturulurken bir hata oluştu.")
            }
        } catch (error) {
            console.log("Kupon oluşturma hatası:", error)
        } finally {
            setLoading(false)
        }

    }

    return (
        <Spin spinning={loading}>
            <Form 
                name="basic"
                layout="vertical"
                onFinish={onFinish} form={form}>
                <Form.Item
                    label="Kupon Kodu"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen bir kupon kodu girin!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Kupon İndirim Oranı"
                    name="discountPercent"
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen bir kupon indirim oranı girin',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Oluştur
                </Button>

            </Form>
        </Spin>

    )
}

export default CreateCouponPage