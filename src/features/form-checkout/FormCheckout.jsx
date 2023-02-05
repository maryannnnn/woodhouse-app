import './formCheckout.scss'
import {useState} from "react";
import Button from "../../shared/ui/btn/Button";
import Input from "../../shared/ui/input/Input";
import Select from "../../shared/ui/select/Select";

const FormCheckout = () => {

    const [form, setForm] = useState({name: '', tel: '', email: '', price: '', product: ''})

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const submitHandlerСheckout = (e) => {
        e.preventDefault()
    }

    const selectOptions = [
        {value: "sofa", label: "Sofa"},
        {value: "table", label: "Table"},
        {value: "chairs", label: "Chairs"},
        {value: "closet", label: "Closet"}]

    return (
        <form className="form-checkout">
            <div className="form-checkout__block">
                <label className="form-checkout__title">Name</label>
                <Input type="text" name="name" value={form.name} onChange={changeHandler} placeholder="Input name..."/>
            </div>
            <div className="form-checkout__block">
                <label className="form-checkout__title">Mobile number</label>
                <Input type="tel" name="tel" value={form.tel} onChange={changeHandler}
                       placeholder="Input mobile number..."/>
            </div>
            <div className="form-checkout__block">
                <label className="form-checkout__title">Email</label>
                <Input type="email" name="email" value={form.email} onChange={changeHandler}
                       placeholder="Input email..."/>
            </div>
            <div className="form-checkout__block">
                <label className="form-checkout__title">Type of product</label>
                <Select
                    name="product"
                    value={form.product}
                    onChange={changeHandler}
                    options={selectOptions}
                />
            </div>

            <div className="form-checkout__block">
                <Button
                    className="button-checkout"
                    type='submit'
                    onClick={submitHandlerСheckout}
                    name='Сheckout'
                />
            </div>

        </form>
    )
}

export default FormCheckout;