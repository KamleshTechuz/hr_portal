import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'

import { Card, DataTable } from 'react-native-paper';
import CustomTablesHeader from './tables/CustomTablesHeader';
import CustomTableRows from './tables/CustomTableRows';

const optionsPerPage = [2, 3, 4];
const headers = ['Id', 'Name', 'Status']

const rows = [
    { id: 1, name: 'React', status: 'Active' },
    { id: 2, name: 'React', status: 'Active' },
    { id: 3, name: 'React', status: 'Active' },
    { id: 4, name: 'React', status: 'Active' },
    { id: 5, name: 'React', status: 'Active' },
]

const CustomTable = () => {

    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);

  return (
    <Card style={{margin: 15, backgroundColor: 'white', borderRadius: 5}}>
    <DataTable>

        <CustomTablesHeader data={headers} />

        <CustomTableRows data={rows} />

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
    </Card>
  )
}

export default CustomTable

const styles = StyleSheet.create({})