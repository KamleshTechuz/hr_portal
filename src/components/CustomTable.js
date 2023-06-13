import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'

import { DataTable } from 'react-native-paper';
import CustomTablesHeader from './tables/CustomTablesHeader';
import CustomTableRows from './tables/CustomTableRows';

const optionsPerPage = [2, 3, 4];
const headers = ['Id', 'Name', 'Status', 'Action']

const rows = [
    { id: 1, name: 'React', status: 'Avtive' },
    { id: 2, name: 'React', status: 'Avtive' },
    { id: 3, name: 'React', status: 'Avtive' },
    { id: 4, name: 'React', status: 'Avtive' },
    { id: 5, name: 'React', status: 'Avtive' },
]

const CustomTable = () => {

    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);

  return (
    <View>
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
    </View>
  )
}

export default CustomTable

const styles = StyleSheet.create({})