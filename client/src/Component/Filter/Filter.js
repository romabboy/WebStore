import React, { useEffect, useRef, useState, useReducer } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"
import { useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider'
import { reducerFilter } from '../../Reducer/reducerFilter';

export default function Filter({type, setItem}) {
  const [filter, setFliter] = useState(null); 
  const [sendFilter, setSendFilter] = useReducer(reducerFilter, {});
  const [searchParams, setSearchParams] = useSearchParams();



  useEffect(()=>{
    if(!searchParams.toString()) return;

    let obj = {};
    
    for(let [key,value] of searchParams.entries()){
      value = isNaN(value) ? value : +value;

      obj[key] = obj[key] ? [...obj[key],value] : [value]
    }


    console.log("OBJ", obj)

    fetch(`${process.env.REACT_APP_URL_ALLITEMS}/${type}/filterItems`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then( data => data.json() )
    .then( json => {
        setItem(json)
        setSendFilter({type: "update", update: obj})
    })
    
  }, [])

  useEffect( () => {

        let price = searchParams.getAll("price");

           
        fetch(`${process.env.REACT_APP_URL_ALLITEMS}/${type}/filter`)
        .then( data => data.json())
        .then( json =>{
          price = price.length ? price : [json.min,json.max];
          setFliter(json);
          setSendFilter({type: "addArray", key: "price", value: price })
          
        })
        
  }, [type])

  const sendOnServer = (e) => {
    e.preventDefault()



    fetch(`${process.env.REACT_APP_URL_ALLITEMS}/${type}/filterItems`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(sendFilter)
    })
    .then( data => data.json() )
    .then( json => {
      setSearchParams({...sendFilter})
      setItem(json)
    })
    
  }



  return (
    <form className="page__filter">
      { filter &&
        <>
          <Option 
          ignore={["Lol"]} 
          setSendFilter={setSendFilter}
          sendFilter={sendFilter} 
          obj={filter}

          />  
          <PriceComponent  
          setSendFilter={setSendFilter} 
          details={filter}
          sendFilter={sendFilter}
          />

          <input 
          type="submit" 
          onClick={sendOnServer} 
          name='submit' 
          id='fitler__submit' 
          value={"Send"}

          />
        </>
      }

    </form>
  )
}


function Option({obj, ignore = null, setSendFilter, sendFilter}){
  let arrComponent = [];  
  
  outer: for(let key of Object.getOwnPropertyNames(obj)){
      if(!Array.isArray(obj[key])) continue  
      if(ignore){
        for(let i = 0; i < ignore.length; i++){
            if(ignore[i] === key) continue outer;
        }
      }

      arrComponent.push(
        <SelectComponent  
            nameCharacteristics={key} 
            setSendFilter={setSendFilter} 
            sendFilter={sendFilter}
            details={obj[key]} 
            key={key} 
            nameCategory={key} 

            />
      )
    
    }
  
  return arrComponent
}


function SelectComponent({details, nameCategory, setSendFilter, nameCharacteristics, sendFilter}){
  const [open, setOpen] = useState(false);

  return (
    <div className="filter__select" onMouseDown={ e => e.preventDefault()} onClick={ () => setOpen(!open)}>
        <div className="filter__name">
          <span className="filter__title">{nameCategory}</span>
          <span className="filter__arrow"><MdKeyboardArrowDown /></span>
        </div>
        <div className={`filter__category ${open ? "open" : ""}`}>
            
            {details.map( ( item, index ) => {
                let checked = false;

                sendFilter[`characteristics.${nameCategory}`]?.forEach(number => {
                  if(number === item){
                    
                    checked = true;
                    return;                    
                  }

                  
                  })
                

                return (
                  <div key={index} className="filter__category_details" onClick={ e => e.stopPropagation() } >
                          <label htmlFor={`${nameCategory}_${item}`}>{item}</label>
                          <InputComponent
                             type="checkbox"  
                             name={`${nameCategory}_${item}`}
                             check={checked}
                             setSendFilter={setSendFilter}
                             nameCharacteristics={nameCharacteristics}     
                             item={item}                   
                           />
                   </div>


                         )
                  }
            )
            }

        </div>
    </div>
  )
}


function PriceComponent({details, setSendFilter, sendFilter}){   
    const min = 1;
    const max = details.max;
    const [searchPrice] = useSearchParams()
    let defaultPrice = searchPrice.getAll("price").length ? searchPrice.getAll("price") : [min,max];
    const [inputMin, setInputMin] = useState(defaultPrice[0]);
    const [inputMax, setInputMax] = useState(defaultPrice[1]);




    console.log(sendFilter.price)

    return(
      <div className="filter__price">
        <ReactSlider 
            className="filter__horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={defaultPrice}
            max = {max}
            min = {min}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            onAfterChange={e => {
              setSendFilter({type: "addArray", key: "price", value: e})
            }}
            // minDistance={10} 
            />
          <input type="text" className="filter__input_min" value={inputMin} onChange={ e => {
             let value = e.target.value;
            
            if(isNaN(value) || value < 1) return;

            let inputMax = +sendFilter.price[1];
            let inputMin = +value;
            
            setInputMin(e.target.value)
            setSendFilter({type: "addArray", key: "price", value: [inputMin,inputMax]})
            }} />
          <input type="text" className="filter__input_max" value={inputMax} onChange={ e => {
            let value = e.target.value;
            
            if(isNaN(value) || value > max) return;

            let inputMin = +sendFilter.price[0];
            let inputMax = +value;

            setInputMax(e.target.value)
            setSendFilter({type: "addArray", key: "price", value: [inputMin, inputMax] })
            }} />
      </div>
    )

}

function InputComponent({ setSendFilter, details, nameCharacteristics, item, check, ...props}){
  const [checked, setChecked] = useState(check)
  return(
    <input 
    {...props}
    checked={checked}
    onChange={ e => {
      setSendFilter({type:"addCheckbox", key: nameCharacteristics, value: item, checked: e.target.checked})
      setChecked(!checked)
    }}
    
    />    
  )
}