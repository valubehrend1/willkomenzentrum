import React, { useState, FormEvent } from "react";
import '../../../public/styles/calculator.css';

const NumberInputForm: React.FC = () => {
    const [income, setIncome] = useState<string>("");
    const [familyMembers, setFamilyMembers] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);
    
    const calculateDifference = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const incomeValue = parseFloat(income) || 0;
        const familyMembersValue = parseFloat(familyMembers) || 0;
        const requiredMoney = familyMembersValue * 1500;
        const difference = incomeValue - requiredMoney;
        setResult(difference);
    };
    
    return (
        <form className="form--base panel--heavy" onSubmit={calculateDifference}>
            <div className="form-group">
                <label htmlFor="incomeInput" className="form-label">
                        Mietpreis
                </label>
                <input
                    className="form-control"
                    id="incomeInput"
                    type="number"
                    name="income"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="familyMembersInput" className="form-label">
                        Anzahl der Familienmitglieder
                </label>
                <input
                    className="form-control"
                    id="familyMembersInput"
                    type="number"
                    name="familyMembers"
                    value={familyMembers}
                    onChange={(e) => setFamilyMembers(e.target.value)}
                />
            </div>
            <div className="form-actions__left">
                <button type="submit" className="button">Berechnen</button>
            </div>
            {result !== null && (
                <h4>
                    {result >= 0 
                        ? `Sie haben einen Überschuss von ${result} Euro.` 
                        : `Sie haben ein Defizit von ${Math.abs(result)} Euro.`}
                </h4>
            )}
        </form>
    );
};

export default NumberInputForm;
