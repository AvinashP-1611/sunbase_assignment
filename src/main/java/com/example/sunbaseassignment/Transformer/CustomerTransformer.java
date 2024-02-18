package com.example.sunbaseassignment.Transformer;

import com.example.sunbaseassignment.Entity.Customer;
import com.example.sunbaseassignment.dto.requestDto.CustomerRequest;
import com.example.sunbaseassignment.dto.responseDto.CustomerResponse;

public class CustomerTransformer {
    public static CustomerResponse CustomerToCustomerResponse(Customer customer){
       return  CustomerResponse.builder()
               .email(customer.getEmail())
               .firstName(customer.getFirstName())
               .lastName(customer.getLastName())
               .build();
    }

    public static Customer CustomerRequestToCustomer(CustomerRequest customerRequest){
        return Customer.builder()
                .firstName(customerRequest.getFirstName())
                .lastName(customerRequest.getLastName())
                .email(customerRequest.getEmail())
                .street(customerRequest.getStreet())
                .state(customerRequest.getState())
                .address(customerRequest.getAddress())
                .city(customerRequest.getCity())
                .phone(customerRequest.getPhone())
                .build();
    }

}
