package sesac.sesacjpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.sesacjpa.domain.User;
import sesac.sesacjpa.domain.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	Optional<UserEntity> findByName(String name);
	// Optional<UserEntity> findById(int id);
	// Optional<UserEntity> findByIdName(int id, String name);
	// // select ~~ where name = #{name}
	//
	// boolean existsByName(String name);

	// UserEntity userEntity
	// Optional<UserEntity> user; user.get()
}
