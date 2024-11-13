import React, { useState } from 'react';

interface FormValues {
  amount: number;
  description?: string;
  category: string;
}

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    amount: 0,
    description: '',
    category: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container rounded-md border-2 border-dimgray">
      <form>
        <input
          name="amount"
          type="number"
          placeholder="Enter the amount"
          value={formValues.amount}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Enter the description"
          value={formValues.description}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Enter the category"
          value={formValues.category}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Form;
