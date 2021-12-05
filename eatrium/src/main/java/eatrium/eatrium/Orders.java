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
public class Orders {
    @Id
    private String OrderId;
    private String UserAddress;
    private String ItemId;
    private Boolean IsPaid;
}
