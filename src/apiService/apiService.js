export const getCardData = () =>{
    const data = new Promise((resolve, reject)=>{
        const mockData = {
            type: 'Debit Card',
            balance: '50000',
            name: 'Sumedh Tare',
            number: '1234567812345678',
            expiryDate: '12/20',
            cvv: '123',
            limit: '0'
        }
        resolve(mockData)
    })
    return data
}