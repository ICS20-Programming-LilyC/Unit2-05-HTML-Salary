// Copyright (c) 2023 Lily C All rights reserved
//
// Created by: Lily C
// Created on: 03/21/2023
// This file contains the JS functions for index.html


'use strict'

// declare constants
const TAX_BRACKET = 0.1805

/**
 * This function calculates your salary.
 */
function payClicked () {
  // get user input
  let hours = parseFloat(document.getElementById('hours').value)
  let rate = parseFloat(document.getElementById('rate').value)

  // calculate the pay and the tax
  let total_pay = hours * rate
  let tax = TAX_BRACKET * total_pay
	let total_earned = total_pay - tax 

  // display the results
  document.getElementById('total-earned').innerHTML = "Your pay will be $" + total_earned.toFixed(2)
  document.getElementById('tax').innerHTML = "The government will take $" + tax.toFixed(2)
}