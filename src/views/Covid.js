import './Covid.scss'
import useFetch from '../Customize/fetch'


const Covid = () => {
    const { data: dataCovid, isLoading, isError } = useFetch('https://disease.sh/v3/covid-19/countries')

    return (
        <>
            <h2>The Countries in the World</h2>
            <table>
                {/* {console.log('Check dataCovid: ', dataCovid)} */}
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.country}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.recovered}</td>
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