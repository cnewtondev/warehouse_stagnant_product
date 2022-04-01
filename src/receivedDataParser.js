import React from 'react';
import Papa from 'papaparse';
import rData from '../src/data/sampleReceivingData.csv'

let receivedInfo = [];
//load quote data
const response = fetch(rData)
.then(response => response.text())
.then(v => Papa.parse(v))
.catch(err => console.log(err))
response.then(v =>{
  for(let x = 0; x < v.data.length; x++){
    let rData = v.data[x].toString().split(",")
    let receiveItem = {product: rData[0], quantityReceived: parseInt(rData[1]), dateReceived: new Date(rData[2])}
    receivedInfo.push(receiveItem)
  }
})

export default receivedInfo
