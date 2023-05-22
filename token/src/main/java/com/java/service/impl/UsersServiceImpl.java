package com.java.service.impl;

import com.java.dto.RegisterDTO;
import com.java.model.Users;
import com.java.repos.IUsersRepos;
import com.java.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImpl implements IUsersService {
    @Autowired
    IUsersRepos repos;
    @Override
    public Users saveUser(RegisterDTO registerDTO) {
        return repos.save(new Users(registerDTO));
    }
}
