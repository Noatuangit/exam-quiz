package com.java.service.impl;

import com.java.model.Role;
import com.java.model.Users;
import com.java.repos.IUsersRepos;
import com.java.service.IUserRolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class UserServiceImpl implements UserDetailsService {
    @Autowired
    IUsersRepos usersRepos;

    @Autowired
    IUserRolesService userRolesService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = usersRepos.findByUsername(username);
        if (users == null) {
            throw new UsernameNotFoundException("Username " + username + " was not found in the database");
        }
        Collection<GrantedAuthority> list = userRolesService.findAllByUsername(username);
        return new User(users.getUsername(),
                users.getPassword(), list);
    }

    public Users findByUsername(String username){
        return usersRepos.findByUsername(username);
    }
}
