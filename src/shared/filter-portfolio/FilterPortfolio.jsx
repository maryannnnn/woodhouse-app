import './filter-portfolio.scss'
import Input from "../input/Input";
import Select from "../select/Select";

const FilterPortfolio = ({filter, setFilter}) => {

    const changeTitleHandler = (e) => {
        setFilter({...filter, title: e.target.value});
    }

    const changeCategoryHandler = (e) => {
        setFilter({...filter, category: e.target.value});
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

    return (
        <form className="filter">
            <div className="filter__block">
                <label className="filter__title">Title</label>
                <Input type="text" name="title" value={filter.title} onChange={changeTitleHandler} placeholder="Input title..."/>
            </div>
            <div className="filter__block">
                <label className="filter__title">Category</label>
                <Input type="text" name="category" value={filter.category} onChange={changeCategoryHandler}
                       placeholder="Input category..."/>
            </div>
            <div className="filter__block">
                <label className="filter__title">Architect</label>
                <Input type="text" name="architect" value={filter.architect} onChange={changeArchitectHandler}
                       placeholder="Input architect..."/>
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