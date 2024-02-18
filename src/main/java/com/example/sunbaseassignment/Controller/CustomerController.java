package com.example.sunbaseassignment.Controller;

import com.example.sunbaseassignment.Entity.Customer;
import com.example.sunbaseassignment.Service.CustomerService;
import com.example.sunbaseassignment.dto.requestDto.CustomerRequest;
import com.example.sunbaseassignment.dto.responseDto.CustomerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    //add customer
    @PostMapping("/addCustomer")
    @CrossOrigin("*")
    public ResponseEntity<CustomerResponse> addCustomer(@RequestBody CustomerRequest customerRequest){
        CustomerResponse customerResponse= customerService.addCustomer(customerRequest);
         return new ResponseEntity<>(customerResponse,HttpStatus.CREATED);
    }

    //get all customer
    @GetMapping("/getCustomer")
    @CrossOrigin("*")
    public ResponseEntity<List<Customer>> getCustomer(){
        List<Customer> customerList= customerService.getCustomer();
        return new ResponseEntity<>(customerList,HttpStatus.FOUND);
    }

    @GetMapping("/getByQuery")
    @CrossOrigin("*")
    public ResponseEntity<Customer> getByQuery(@RequestParam String type, @RequestParam String value){

        Customer customer= customerService.getByQuery(type,value);

        return new ResponseEntity<>(customer,HttpStatus.OK);
    }

    @PutMapping("/updateCustomer")
    @CrossOrigin("*")
    public ResponseEntity<CustomerResponse> updateCustomer(@RequestBody CustomerRequest customerRequest){
        CustomerResponse customerResponse= customerService.updateCustomer(customerRequest);
        return new ResponseEntity<>(customerResponse,HttpStatus.FOUND);
    }

    //delete customer by id
    @DeleteMapping("/deleteCustomer")
    @CrossOrigin("*")
    public ResponseEntity deleteCustomer(@RequestParam long id){
        customerService.deleteCustomer(id);
        return new ResponseEntity("delete successfully",HttpStatus.FOUND);
    }
}
