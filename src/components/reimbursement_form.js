import React, { useState } from 'react';

const ReimbursementForm = () => {
  const fakeReimbursementData = {
    date: '2024-01-05',
    amount: '5000',
    paymentType: 'cash',
    outOfPocket: {
      meals: true,
      accommodation: false,
      transportation: true,
      materialTransportation: false,
      materialTransportationText: '',
      others: true,
      otherText: 'Miscellaneous expenses',
    },
    raisedBy: 'employee1',
    remarks: 'Test reimbursement request.',
  };

  const [date, setDate] = useState(fakeReimbursementData.date);
  const [amount, setAmount] = useState(fakeReimbursementData.amount);
  const [paymentType, setPaymentType] = useState(fakeReimbursementData.paymentType);
  const [outOfPocket, setOutOfPocket] = useState(fakeReimbursementData.outOfPocket);
  const [raisedBy, setRaisedBy] = useState(fakeReimbursementData.raisedBy);
  const [remarks, setRemarks] = useState(fakeReimbursementData.remarks);
const handleOutOfPocketChange = (expense) => {
    setOutOfPocket((prev) => ({ ...prev, [expense]: !prev[expense] }));
  };
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setOutOfPocket((prev) => ({ ...prev, [name]: checked }));
      if (name === 'materialTransportation' && !checked) {
        setOutOfPocket((prev) => ({ ...prev, materialTransportationText: '' }));
      }
      if (name === 'others' && !checked) {
        setOutOfPocket((prev) => ({ ...prev, otherText: '' }));
      }
    } else {
      if (name === 'raisedBy') {
        setRaisedBy(value);
      }
      if (name === 'remarks') {
        setRemarks(value);
      }
      if (name === 'date') {
        setDate(value);
      }
      if (name === 'amount') {
        setAmount(value);
      }
      if (name === 'paymentType') {
        setPaymentType(value);
      }
      if (name === 'materialTransportationText') {
        setOutOfPocket((prev) => ({ ...prev, materialTransportationText: value }));
      }
      if (name === 'otherText') {
        setOutOfPocket((prev) => ({ ...prev, otherText: value }));
      }
    }
  };

  const handleReset = () => {
    setDate('');
    setAmount('');
    setPaymentType('');
    setOutOfPocket({
      meals: false,
      accommodation: false,
      transportation: false,
      others: false,
      materialTransportation: false,
      materialTransportationText: '',
      otherText: '',
    });
    setRaisedBy('');
    setRemarks('');
    // Reset individual checkboxes to false
    setOutOfPocket((prev) => ({ ...prev, meals: false, accommodation: false, transportation: false, materialTransportation: false, others: false }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!date || !amount || !paymentType || !raisedBy || !remarks) {
      alert('Please fill in all required fields.');
      return;
    }

    if (outOfPocket.materialTransportation && !outOfPocket.materialTransportationText) {
      alert('Please fill in Material Transportation Text.');
      return;
    }

    if (outOfPocket.others && !outOfPocket.otherText) {
      alert('Please fill in Others Text.');
      return;
    }
    console.log({
      date,
      amount,
      paymentType,
      outOfPocket,
      raisedBy,
      remarks,
    });
  };

  return (
    <div className='container-main'>
      <div className='container'>
        <div className='form-title'>
          <h2 className='title-text'>Reimbursements Request Form</h2>
        </div>

        <form className="form-main" onSubmit={handleSubmit}>
          <label className='form-label'> Date:</label>
          <input className="entry" type="date" name="date" value={date} onChange={handleInputChange} />

          <label className='form-label'> Amount:</label>
          <input className="entry" type="number" name="amount" value={amount} onChange={handleInputChange} />

          <label className='form-label'>Payment Type:</label>
          <select className="entry" name="paymentType" value={paymentType} onChange={handleInputChange}>
            <option value="">Select Payment Type</option>
            <option value="cash">Cash</option>
            <option value="creditdebitCard">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Netbanking</option>
            <option value="other">Other</option>
          </select>
 
          <fieldset>
            <legend className='expense-title'>Out of Pocket Expense:</legend>

            <label className='check-item'>
                    <input className="checkbox-entry" type="checkbox" name="meals" checked={outOfPocket.meals} onChange={() => handleOutOfPocketChange('meals')} />
                    Food
                    </label>

                    <label className='check-item'>
                    <input className="checkbox-entry" type="checkbox" name="accommodation" checked={outOfPocket.accommodation} onChange={() => handleOutOfPocketChange('accommodation')} />
                    Accommodation
                    </label>

                    <label className='check-item'>
                    <input className="checkbox-entry" type="checkbox" name="transportation" checked={outOfPocket.transportation} onChange={() => handleOutOfPocketChange('transportation')} />
                    Transportation
                    </label>
                    <label className='check-item'>
                    <input className="checkbox-entry" type="checkbox" name="materialTransportation" checked={outOfPocket.materialTransportation} onChange={() => handleOutOfPocketChange('materialTransportation')} />
                    Material Transportation</label>
                    {outOfPocket.materialTransportation && (
                      <input className="entry" type="text" name="materialTransportationText" value={outOfPocket.materialTransportationText} onChange={handleInputChange} />
                    )}
                    <label className='check-item'>
                    <input className="checkbox-entry" type="checkbox" name="others" checked={outOfPocket.others} onChange={() => handleOutOfPocketChange('others')} />
                    Others</label>
                    {outOfPocket.others && (
                      <input className="entry" type="text" name="otherText" value={outOfPocket.otherText} onChange={handleInputChange} />
                    )}

          </fieldset>

          <label className='form-label'>Raised By:</label>
          <select className="entry" name="raisedBy" value={raisedBy} onChange={handleInputChange}>
            <option value="">Select Employee</option>
            <option value="employee1">Employee 1</option>
            <option value="employee2">Employee 2</option>
            <option value="employee3">Employee 3</option>
          </select>

          <label className='form-label'>Remarks:</label>
          <textarea className="entry" name="remarks" value={remarks} onChange={handleInputChange} />
          <div className='form-button'>
            <button className="reset-button" type="button" onClick={handleReset}>Reset</button>
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReimbursementForm;
