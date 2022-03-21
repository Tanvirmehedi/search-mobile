import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const Search = () => {
  return (
    <div>
      <InputGroup className="mb-3 mt-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
