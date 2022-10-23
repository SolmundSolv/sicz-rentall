import React, { ReactElement } from "react";
import AdminLayout from "../../../components/Admin/AdminLayout";
import { NextPageWithLayout } from "../_app";

const Dashboard: NextPageWithLayout = () => {
    return (
        <div className="m-6 grid grid-cols-2 grid-rows-2 gap-12 bg-gray-100">
            <div className="h-full rounded-md bg-gray-500">
                <table className="h-auto w-full table-fixed rounded-md text-white">
                    <thead className="rounded-t-md border-b border-gray-200 bg-gray-800 text-left font-bold">
                        <tr className="rounded-md">
                            <th className="p-3">Number</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="m-4 text-start">
                        <tr className="m-4 border-b border-gray-400">
                            <td className="p-2">957644</td>
                            <td>600</td>
                            <td>Ended</td>
                        </tr>
                        <tr className="m-4 border-b border-gray-400">
                            <td className="p-2">957645</td>
                            <td>1600</td>
                            <td>In progress</td>
                        </tr>
                        <tr className="m-4">
                            <td className="p-2">957646</td>
                            <td>1430</td>
                            <td>Waiting</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row-span-2 h-full bg-gray-700">123</div>
            <div className="h-full bg-gray-800">123</div>
        </div>
    );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default Dashboard;
