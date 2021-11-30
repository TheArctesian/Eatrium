package com.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = org.springframework.http.HttpStatus.NOT_FOUND)
public class notfound extends RuntimeException{
    public static final long serialVersionUID = 1L;
    public notfound(String msg){
        super(msg);
    }

}
