import React from 'react'

const Search = props =>{
    const {searchTerms, changeHandler, submitHandler} = props

    return (
        <form className = "row pt-5" onSubmit = {submitHandler}>
            <div className="col-sm-6 form-group">
                <div classname = "row">
                <label htmlFor="category" className="col-sm-4">Search for:</label>
                    <select name="category"  className="col-sm-8" onChange = {changeHandler} value = {searchTerms.category}>
                        <option value = "people">People</option>
                            <option value = "films"> Films</option>
                            <option value = "starships">Starships</option>
                            <option value = "vehicles">Vehicles</option>
                            <option value = "species">Species</option>
                            <option value = "planets">Planets</option>
                    </select>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="col-sm6">
                    <div>
                    <label htmlFor="id" >ID:</label>
                    <input type="number" name = "id" onChange = {changeHandler} value = {searchTerms.id}/>
                    </div>
                    <div>
                    <input type="submit" value = "Search" className = " btn btn-primary"/>
                    </div>
                </div>
            </div>
            </form>
    )
}

export default Search