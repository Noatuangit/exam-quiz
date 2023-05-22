package com.java.service;

import org.springframework.security.core.GrantedAuthority;

import java.util.List;

public interface IUserRolesService {
    List<GrantedAuthority> findAllByUsername(String username);

    void save(String username, String roles);
}
