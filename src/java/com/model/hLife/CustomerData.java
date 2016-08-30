/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.model.hLife;

/**
 *
 * @author Administrator
 */

public class CustomerData {
    
    private String name;
    private String phone;

    public String getName() {
        System.out.println(" return name;"+name);
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        System.out.println("return phone;" + phone);
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
}
