package com.example.sunbaseassignment.Repository;

import com.example.sunbaseassignment.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {

    List<User> findAll();


    User findByEmail(String username);
}
