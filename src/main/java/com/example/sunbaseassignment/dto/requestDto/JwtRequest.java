package com.example.sunbaseassignment.dto.requestDto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class JwtRequest { //login page user's dto
    String email;
    String password;
}
