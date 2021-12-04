package eatrium.eatrium;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Menu {
    @Id
    private String ItemId;
    private String Name;
    private String Description;
    private double Price;
    private String Image;
}