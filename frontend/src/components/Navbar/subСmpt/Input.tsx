import React, { FC, useCallback, useState } from 'react';
import { Link } from "react-router-dom";

export interface IRecipe {
  href: string;
  ingredients: string;
  thumbnail: string;
  name: string;
}
const Input: FC = () => {
  const [value, setValue] = useState('')
  const searchForRecipes = async (query: String): Promise<IRecipe[]> => {
    const result = await fetch(`http://localhost:3000/?search=${value}`)
    return (await result.json()).results;
  };
  const handleChange = useCallback((e) => {
    setValue(e.target.value)

  }, [value])
  const handleClick = useCallback(async (e) => {
    e.preventDefault()
    console.log(1111);
    const result = await fetch(`http://localhost:3000/?search=${value}`)
  }, [value])
  return (
    <div>
      <form className="searchForm">
        <input 
          id="searchText"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
        >
          Search
        </button>
      </form>

    </div>
  )
}
export default Input;
