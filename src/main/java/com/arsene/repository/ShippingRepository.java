package com.arsene.repository;

import com.arsene.domain.Shipping;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Shipping entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ShippingRepository extends JpaRepository<Shipping, Long> {

}
