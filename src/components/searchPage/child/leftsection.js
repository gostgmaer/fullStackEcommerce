import React, { useState } from 'react';
import {
  Slider,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const LeftFilterSection = () => {
  // State for controlling filters
  const [brandFilters, setBrandFilters] = useState({
    nike: false,
    adidas: false,
    puma: false,
  });

  const [categoryFilters, setCategoryFilters] = useState({
    clothing: false,
    shoes: false,
    accessories: false,
  });

  const [ratingRange, setRatingRange] = useState([0, 5]);

  const [priceRange, setPriceRange] = useState([20, 80]);

  const [tagFilters, setTagFilters] = useState({
    newArrival: false,
    bestSeller: false,
    clearance: false,
  });

  const [availabilityFilters, setAvailabilityFilters] = useState({
    inStock: false,
    outOfStock: false,
  });

  const [discountRange, setDiscountRange] = useState([0, 50]);

  const [offerFilters, setOfferFilters] = useState({
    freeShipping: false,
    giftWrap: false,
  });

  const handleBrandChange = (brand) => {
    setBrandFilters((prevFilters) => ({
      ...prevFilters,
      [brand]: !prevFilters[brand],
    }));
  };

  const handleCategoryChange = (category) => {
    setCategoryFilters((prevFilters) => ({
      ...prevFilters,
      [category]: !prevFilters[category],
    }));
  };

  const handleTagChange = (tag) => {
    setTagFilters((prevFilters) => ({
      ...prevFilters,
      [tag]: !prevFilters[tag],
    }));
  };

  const handleAvailabilityChange = (availability) => {
    setAvailabilityFilters((prevFilters) => ({
      ...prevFilters,
      [availability]: !prevFilters[availability],
    }));
  };

  const handleOfferChange = (offer) => {
    setOfferFilters((prevFilters) => ({
      ...prevFilters,
      [offer]: !prevFilters[offer],
    }));
  };

  const styles = {
    accordionContainer: {
      '& .MuiCollapse-container': {
        transition: 'none !important',
      },
      '& .MuiCollapse-wrapper': {
        transition: 'none !important',
      },
      '& .MuiCollapse-entered, .MuiCollapse-exited': {
        height: 'auto !important',
      },
    },
  };

  return (
    <>
    <Box className=' flex flex-col' sx={{...styles.accordionContainer}} >
    <><Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <h3 >
            Brand
          </h3>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        {Object.entries(brandFilters).map(([brand, checked]) => (
          <FormControlLabel
            key={brand}
            control={
              <Checkbox
                checked={checked}
                onChange={() => handleBrandChange(brand)}
              />
            }
            label={brand}
          />
        ))}
      </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Category Filter */}
    

      {/* Rating Filter */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Rating
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add your rating filter checkboxes or a slider here */}
        </AccordionDetails>
      </Accordion>

      {/* Price Range Filter */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Price Range
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add your price range slider here */}
        </AccordionDetails>
      </Accordion>

      {/* Tags Filter */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Tags
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add your tags filter checkboxes here */}
        </AccordionDetails>
      </Accordion>

      {/* Availability Filter */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Availability
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add your availability filter checkboxes here */}
        </AccordionDetails>
      </Accordion>

      {/* Discount Filter */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Discount
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add your discount filter slider here */}
        </AccordionDetails>
      </Accordion>

      {/* Offer Filter */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography >
            Offer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add your offer filter checkboxes here */}
        </AccordionDetails>
      </Accordion></>
    </Box>
      {/* <div style={{ padding: '16px' }}>
     
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Brand
      </Typography>
      <FormGroup>
        {Object.entries(brandFilters).map(([brand, checked]) => (
          <FormControlLabel
            key={brand}
            control={
              <Checkbox
                checked={checked}
                onChange={() => handleBrandChange(brand)}
              />
            }
            label={brand}
          />
        ))}
      </FormGroup>

  
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Category
      </Typography>
      <FormGroup>
        {Object.entries(categoryFilters).map(([category, checked]) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={checked}
                onChange={() => handleCategoryChange(category)}
              />
            }
            label={category}
          />
        ))}
      </FormGroup>

    
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Rating
      </Typography>
      <Slider
        value={ratingRange}
        onChange={(_, newValue) => setRatingRange(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={5}
      />

   
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={(_, newValue) => {setPriceRange(newValue)
        console.log(priceRange);
    }}
        onChangeCommitted={(_, newValue) => {setPriceRange(newValue)
            console.log(priceRange);
        }}
        valueLabelDisplay="auto"
        min={0}
        max={100}
      />


      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Tags
      </Typography>
      <FormGroup>
        {Object.entries(tagFilters).map(([tag, checked]) => (
          <FormControlLabel
            key={tag}
            control={
              <Checkbox
                checked={checked}
                onChange={() => handleTagChange(tag)}
              />
            }
            label={tag}
          />
        ))}
      </FormGroup>

    
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Availability
      </Typography>
      <FormGroup>
        {Object.entries(availabilityFilters).map(([availability, checked]) => (
          <FormControlLabel
            key={availability}
            control={
              <Checkbox
                checked={checked}
                onChange={() => handleAvailabilityChange(availability)}
              />
            }
            label={availability === 'inStock' ? 'In Stock' : 'Out of Stock'}
          />
        ))}
      </FormGroup>

     
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Discount
      </Typography>
      <Slider
        value={discountRange}
        onChange={(_, newValue) => setDiscountRange(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={100}
      />

   
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Offer
      </Typography>
      <FormGroup>
        {Object.entries(offerFilters).map(([offer, checked]) => (
          <FormControlLabel
            key={offer}
            control={
              <Checkbox
                checked={checked}
                onChange={() => handleOfferChange(offer)}
              />
            }
            label={offer === 'freeShipping' ? 'Free Shipping' : 'Gift Wrap'}
          />
        ))}
      </FormGroup>
    </div> */}
    </>
 
  );
};

export default LeftFilterSection;
