import './Covid.scss'
import useFetch from '../Customize/fetch'


const Covid = () => {
    const { data: dataCovid, isLoading, isError } = useFetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api')

    return (
        <>
            <h2>The Countries in the World</h2>
            <table>
                {console.log('Check dataCovid: ', dataCovid)}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ISO</th>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.iso}</td>
                                    <td>{item.name}</td>
                                </tr>
                            )
                        })}
                    {isLoading === true &&
                        <tr>
                            <td colSpan='5' style={{ textAlign: 'center' }}>Loading</td>
                        </tr>
                    }
                    {isError === true &&
                        <tr>
                            <td colSpan='5' style={{ textAlign: 'center' }}>Something wrong....</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
export default Covid;