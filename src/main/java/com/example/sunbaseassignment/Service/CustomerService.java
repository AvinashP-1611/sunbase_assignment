package com.example.sunbaseassignment.Service;

import com.example.sunbaseassignment.Entity.Customer;
import com.example.sunbaseassignment.Repository.CustomerRepo;
import com.example.sunbaseassignment.Transformer.CustomerTransformer;
import com.example.sunbaseassignment.dto.requestDto.CustomerRequest;
import com.example.sunbaseassignment.dto.responseDto.CustomerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    public CustomerResponse addCustomer(CustomerRequest customerRequest) {
        Customer customer= CustomerTransformer.CustomerRequestToCustomer(customerRequest);
        customerRepo.save(customer);
        return CustomerTransformer.CustomerToCustomerResponse(customer);
    }

    //get all customer
    public List<Customer> getCustomer() {
        return customerRepo.findAll();
    }

    //update customer
    public CustomerResponse updateCustomer(CustomerRequest customerRequest) {
        Customer customer= CustomerTransformer.CustomerRequestToCustomer(customerRequest);
        customerRepo.save(customer);
        return CustomerTransformer.CustomerToCustomerResponse(customer);
    }

    public void deleteCustomer(long id) {
        Customer customer = customerRepo.findById(id);
        if (customer==null) throw new RuntimeException("Customer Not Found");
        customerRepo.delete(customer);
    }

    public Customer getByQuery(String type, String value) {
        //now according to type we fetch values
        if(type.equals("fname")){
            List<Customer> customerList=customerRepo.findByFirstName(value);
            //now only one response we send
            return customerList.get(0);
        }
        else if(type.equals("city")){
            List<Customer> customerList=customerRepo.findByCity(value);
            //now only one response we send
            return customerList.get(0);

        }
        else if(type.equals("email")){
            return customerRepo.findByEmail(value);
        }
        else if(type.equals("phone")){
          return  customerRepo.findByPhone(value);

        }
return null;
    }
}
