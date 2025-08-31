import { LineChart } from '@mui/x-charts/LineChart';
export const Chart = ({ data, value }) => {
    return (
        <LineChart
            xAxis={[
                {
                    data: data,
                    scaleType: "band",
                }
            ]}
            yAxis={[
                {
                    min: 0, 
                    max: Math.max(...value),
                }
            ]}
            series={[
                {
                    data: value,
                },
            ]}
            height={300}
        />
    )
}

