package com.example.sunbaseassignment.Repository;

import com.example.sunbaseassignment.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CustomerRepo extends JpaRepository<Customer,Long> {
    List<Customer> findAll();

    Customer findById(long id);

    @Query(value = "SELECT * FROM customer WHERE first_name=:value",nativeQuery = true)
    List<Customer> findByFirstName(String value);

    @Query(value = "SELECT * FROM customer WHERE city=:value",nativeQuery = true)
    List<Customer> findByCity(String value);

    @Query(value = "SELECT * FROM customer WHERE email=:value",nativeQuery = true)
    Customer findByEmail(String value);

    @Query(value = "SELECT * FROM customer WHERE phone=:value",nativeQuery = true)
    Customer findByPhone(String value);
}
