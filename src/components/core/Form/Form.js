import React from "react";
import PropTypes from "prop-types";
import SchemaForm from "react-jsonschema-form";

const log = type => console.log.bind(console, type);

const Form = ({ schema, data }) => (
  <SchemaForm
    schema={schema}
    formData={data}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default Form;
