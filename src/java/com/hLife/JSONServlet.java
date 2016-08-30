/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hLife;

import com.model.hLife.CustomerData;
import java.io.BufferedReader;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.*;
/**
 *
 * @author Administrator
 */
public class JSONServlet extends HttpServlet {

private static final long serialVersionUID = 1L;

    List<CustomerData> customerDatas = new LinkedList<>();
     
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{   
        BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
        String json = "";
        if(br != null){
            json = br.readLine();
        }
       ObjectMapper mapper = new ObjectMapper();
       
       CustomerData customerData =mapper.readValue(json, CustomerData.class);
       response.setContentType("application/json");
       customerDatas.add(customerData);
       System.out.println("customerDatas" + customerDatas);
       mapper.writeValue(response.getOutputStream(), customerDatas.remove(0));
       
    }      

}
