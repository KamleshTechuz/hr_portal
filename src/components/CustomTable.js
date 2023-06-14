import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'

import { Card, DataTable } from 'react-native-paper';
import CustomTablesHeader from './tables/CustomTablesHeader';
import CustomTableRows from './tables/CustomTableRows';

const headers = ['ID', 'Name', 'Status']

const rows = [
    { id: 1, name: 'React', status: 'Active' },
    { id: 2, name: 'React', status: 'Active' },
    { id: 3, name: 'React', status: 'Active' },
    { id: 4, name: 'React', status: 'Active' },
    { id: 5, name: 'React', status: 'Active' },
]

const totalRecords = 10;

const initPage = {
	recordPerPage : 10, totalRecords : 0, pages : 0, currentPage : 0
};

const CustomTable = () => {

    const [pages, setPages] = React.useState(initPage);
    const [pagePlace, setPagePlace] = React.useState({from: pages.currentPage*pages.recordPerPage + 1, to: (pages.currentPage + 1) * rows.length});
  
    React.useEffect(() => {
      setPages((pre) => ({ ...pre, currentPage: 0}));
    }, []);

    const handlePageChange = (page) => {
        setPages((pre) => ({ ...pre, currentPage: page}));
        setPagePlace({from: pages.currentPage*pages.recordPerPage + 1, to: (pages.currentPage + 1) * pages.recordPerPage});
    }

  return (
    <Card style={{margin: 15, backgroundColor: 'white', borderRadius: 5}}>
    <DataTable>

        <CustomTablesHeader data={headers} />

        <CustomTableRows data={rows} />

      <DataTable.Pagination
        page={pages.currentPage}
        numberOfPages={pages.pages}
        onPageChange={(page) => handlePageChange(page)}
        label={`${pagePlace.from} - ${pagePlace.to} of ${pages.totalRecords}`}
        showFastPagination={false}
      />
    </DataTable>
    </Card>
  )
}

export default CustomTable

const styles = StyleSheet.create({})