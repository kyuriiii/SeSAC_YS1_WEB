package sesac.sesacjpa.domain;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity // 해당 클래스가 Entity 클래스라는 것을 알려준다.
@Table(name="user") // 테이블 이름 명시
@Getter
@Setter
public class UserEntity{
	@Id
	@GeneratedValue
	private int id; // id primary key auto_increment,
	@Column(length=20, nullable = false)
	// name varchar(20) not null
	private String name;
	@Column(length=20, nullable = false)
	private String nickname;
}
