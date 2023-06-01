import './filter-portfolio.scss'
import Input from "../input/Input";
import Select from "../select/Select";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import Button from "../btn/Button";

const FilterPortfolio = ({filter, setFilter}) => {

    const changeTitleHandler = (e) => {
        setFilter({...filter, title: e.target.value});
    }

    const changeCategoryHandler = (e) => {
        setFilter({...filter, categoryId: e.target.value});
    }

    const changePriceHandler = (value) => {
        setFilter({...filter, price: value});
    }

    const changeArchitectHandler = (e) => {
        setFilter({...filter, architectId: e.target.value});
    }

    const changeStatusHandler = (e) => {
        setFilter({...filter, status: e.target.value});
    }

    const changeItemsHandler = (e) => {
        setFilter({...filter, itemsPerPage: e.target.value});
    }

    const changeCancelHandler = () => {
        setFilter({...filter, title: '', categoryId: 'All', architectId: 'All', price: [10, 40000], status: 'All'});
    }

    const selectOptionsItems = [
        {value: 3, label: "3"},
        {value: 6, label: "6"},
        {value: 9, label: "9"},
        {value: 12, label: "12"},
        {value: 12, label: "15"},
        {value: 12, label: "18"},
    ];

    const selectOptionsCategory = [
        {value: "All", label: "All"},
        {value: "0", label: "Minimalism"},
        {value: "1", label: "Modern"},
        {value: "2", label: "Eclectic"},
        {value: "3", label: "Scandinavian"}];

    const selectOptionsArchitect = [
        {value: "All", label: "All"},
        {value: "0", label: "John Smith"},
        {value: "1", label: "Adam Williams"},
        {value: "2", label: "Emily Davis"},
        {value: "3", label: "Jessica Kim"},
        {value: "4", label: "Michael Johnson"}];

    const selectOptionsStatus = [
        {value: "All", label: "All"},
        {value: "completed", label: "completed"},
        {value: "in progress", label: "in progress"},
        {value: "design", label: "design"}];

    const trackStyle = { backgroundColor: 'orange', height: 5 };
    const handleStyle = {
        borderColor: 'orange',
        height: 18,
        width: 18,
        marginTop: -7,
        backgroundColor: 'white',
    };

    return (
        <form className="filter">
            <div className="filter__block">
                <label className="filter__title">Title</label>
                <Input type="text" name="title" value={filter.title} onChange={changeTitleHandler} placeholder="Input title..."/>
            </div>
            <div className="filter__block">
                <label className="filter__title">Budget</label>
                <Slider
                    range
                    min={0}
                    max={100000}
                    defaultValue={filter.price}
                    onChange={changePriceHandler}
                    onAfterChange={changePriceHandler}
                    trackStyle={[trackStyle, trackStyle]}
                    handleStyle={[handleStyle, handleStyle]}
                />
                <div className="filter__price">
                    <span>{filter.price[0]}$</span>
                    <span>{filter.price[1]}$</span>
                </div>
            </div>
            <div className="filter__block">
                <label className="filter__title">Category</label>
                <Select
                    name="category"
                    value={filter.categoryId}
                    onChange={changeCategoryHandler}
                    options={selectOptionsCategory}
                />
            </div>
            <div className="filter__block">
                <label className="filter__title">Architect</label>
                <Select
                    name="architect"
                    value={filter.architectId}
                    onChange={changeArchitectHandler}
                    options={selectOptionsArchitect}
                />
            </div>
            <div className="filter__block">
                <label className="filter__title">Status</label>
                <Select
                    name="status"
                    value={filter.status}
                    onChange={changeStatusHandler}
                    options={selectOptionsStatus}
                />
            </div>
            <div className="filter__block">
                <label className="filter__title">Items</label>
                <Select
                    name="items"
                    value={filter.itemsPerPage}
                    onChange={changeItemsHandler}
                    options={selectOptionsItems}
                />
            </div>
            <Button type="submit" className="filter__button" onClick={changeCancelHandler} name="cancel" />
        </form>
    )
}

export default FilterPortfolio