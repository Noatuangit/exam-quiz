package com.java.service.impl;

    import com.java.repos.IUserRolesRepos;
import com.java.service.IUserRolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserRolesServiceImpl implements IUserRolesService {
    @Autowired
    IUserRolesRepos rolesRepos;

    @Override
    public List<GrantedAuthority> findAllByUsername(String username) {
        return rolesRepos
                .findAllByUsername(username)
                .stream()
                .map(x -> new SimpleGrantedAuthority(x.getUserRolesID().getRole().getName()))
                .collect(Collectors.toList());
    }
}
