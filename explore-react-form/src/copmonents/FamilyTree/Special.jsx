import React, { useContext } from 'react'
import { AssetContext } from './FamilyTree'

export const Special = ({name, asset}) => {
    const newAsset = useContext(AssetContext);
    console.log(newAsset);
  return (
    <div>
        <h3>Special : {name}</h3>
        <p>Asset : {asset}</p>
        <p>New Asset : {newAsset}</p>
    </div>
  )
}
