import './filter-portfolio.scss'
import Input from "../input/Input";
import Select from "../select/Select";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

const FilterPortfolio = ({filter, setFilter, categoryArray, architectArray}) => {

    const changeTitleHandler = (e) => {
        setFilter({...filter, title: e.target.value});
    }

    const changeCategoryHandler = (e) => {
        setFilter({...filter, category: e.target.value});
    }

    const changePriceHandler = (value) => {
        setFilter({...filter, price: value});
    }

    const changeArchitectHandler = (e) => {
        setFilter({...filter, architect: e.target.value});
    }

    const changeStatusHandler = (e) => {
        setFilter({...filter, status: e.target.value});
    }

    const changeItemsHandler = (e) => {
        setFilter({...filter, items: e.target.value});
    }

    const selectOptionsItems = [
        {value: 3, label: "3"},
        {value: 6, label: "6"},
        {value: 9, label: "9"},
        {value: 12, label: "12"},
        {value: 12, label: "15"},
        {value: 12, label: "18"},
    ];

    const selectOptionsStatus = [
        {value: "", label: "All"},
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
                    max={40000}
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
                    value={filter.category}
                    onChange={changeCategoryHandler}
                    options={categoryArray}
                />
            </div>
            <div className="filter__block">
                <label className="filter__title">Architect</label>
                <Select
                    name="architect"
                    value={filter.architect}
                    onChange={changeArchitectHandler}
                    options={architectArray}
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
                    value={filter.items}
                    onChange={changeItemsHandler}
                    options={selectOptionsItems}
                />
            </div>
            {console.log("filter.status", filter.status)}
            {console.log("filter.items", filter.items)}
        </form>
    )
}

export default FilterPortfolio