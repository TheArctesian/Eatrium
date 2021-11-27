package com.example.user;

public class user {
    private Long id;
    private String name;
    private int yearLevel;
    private String email;

    public user(){

    }
    public user(Long id, String name, int yearLevel, String email) {
        this.id = id;
        this.name = name;
        this.yearLevel = yearLevel;
        this.email = email;
    }

    public user(String name, int yearLevel, String email) {
        this.name = name;
        this.yearLevel = yearLevel;
        this.email = email;
    }

    public Long getId() {return id;}

    public void setId(Long id) {this.id = id;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public int getYearLevel() {return yearLevel;}

    public void setYearLevel(int yearLevel) {this.yearLevel = yearLevel;}

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    @Override
    public String toString() {
        return "student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", yearLevel=" + yearLevel +
                ", email='" + email + '\'' +
                '}';
    }
}


