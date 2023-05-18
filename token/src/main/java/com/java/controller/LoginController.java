package com.java.controller;
import java.util.Date;
import com.java.dto.LoginDTO;
import com.java.dto.ReponseLoginDTO;
import com.java.jwt.JWTProvider;
import com.java.utils.GetMaxRolesOfEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin("http://localhost:3000/")
public class LoginController {
    private final long JWT_EXPIRATION = 60*24*60*1000L;
    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    GetMaxRolesOfEntity getMaxRolesOfEntity;
    @Autowired
    JWTProvider jwtProvider;

    @GetMapping("")
    public ResponseEntity<String> formLogin(@RequestParam("error") String error) {
        return ResponseEntity.status(HttpStatus.OK).body(error);
    }

        @PostMapping("/springSecurity")
    public ResponseEntity<ReponseLoginDTO> login(@RequestBody LoginDTO loginDTO) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
         return ResponseEntity.status(HttpStatus.OK).body(new ReponseLoginDTO(
                String.format("YS%s",
                        jwtProvider
                                .generateToken((UserDetails) authentication
                                        .getPrincipal(),now,expiryDate)),
                expiryDate,
                getMaxRolesOfEntity
                        .getMaxRoleEntity(authentication
                                .getAuthorities()),
                authentication.getName()));
    }
}
