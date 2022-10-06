import React, { FC } from 'react';
import { injectIntl } from 'react-intl';
import { observer, inject } from "mobx-react";
import { Input, Button, Form } from 'antd';
import { PlusCircleOutlined, EditFilled, DeleteFilled } from '@ant-design/icons';

import { ARFilter, ARTable, ARModal, ARForm } from '@/components'
import { Common, Utils } from '@/assets';
import { iModalProps } from '@/components/ARModal/type';
import { ARFilterType, ARTableType } from '@/assets/type/ARComponent';

const FormItem: any = Form.Item;
const ARFormItem: any = ARForm.Item;
const ARModalFormItem: any = ARModal.Item;
const namespace: string = 'CourseListStore';

const columns: { [key: string]: any }[] = [
	{
		title: '课程名称',
		dataIndex: 'courseName',
		key: 'courseName'
	},
	{
		title: '学院',
		dataIndex: 'college',
		key: 'college'
	},
	{
		title: '教师',
		dataIndex: 'teacher',
		key: 'teacher'
	},
	{
		title: "操作",
		dataIndex: "operation",
		key: 'operation',
		render: (text?: { [key: string]: any }, record?: { [key: string]: any },
			index?: number): any => {
			return (
				<div>
					<Button
						icon={<EditFilled />}
						onClick={(): any => {

						}}
					>
						修改
					</Button>
					<Button
						icon={<DeleteFilled />}
						onClick={(): any => {

						}}
					>
						删除
					</Button>
				</div>
			)
		}
	},
]
const dataSource: { [key: string]: any }[] = [
	{
		key: '1',
		courseName: '数据结构',
		college: '计算机学院',
		teacher: '我'
	},
	{
		key: '2',
		courseName: '数据结构',
		college: '计算机学院',
		teacher: '我'
	},
	{
		key: '3',
		courseName: '数据结构',
		college: '计算机学院',
		teacher: '我'
	},
	{
		key: '4',
		courseName: '数据结构',
		college: '计算机学院',
		teacher: '我'
	},
	{
		key: '5',
		courseName: '数据结构',
		college: '计算机学院',
		teacher: '我'
	},
	{
		key: '6',
		courseName: '数据结构',
		college: '计算机学院',
		teacher: '我'
	},
	{
		key: '7',
		courseName: '数据结构',
		college: '计算机学院',
		teacher: '我'
	},
]


@inject(namespace)
@observer
class Index extends React.Component<any, any>{
	render() {
		const { intl } = this.props;
		const { required } = Common.Validates(intl);
		const [tablePropsTemp, modalPropsTemp, filterProps] = Utils.splitTableProps(this.props[namespace]);
		/**
		 * 这些数据应来源后台
		*/
		tablePropsTemp.dataSource = dataSource;
		tablePropsTemp.pagination.total = 7;

		const tableProps: ARTableType.iTableProps = {
			rowKey: ((record: any): any => record.id),
			columns,
			dataSource,
			...tablePropsTemp
		}

		const modalProps: iModalProps = {
			name: 'courseList-modal',
			title: '新增课程',
			onOk: (values: any): boolean => {
				console.log('values', values);
				return true
			},
			onCancel: (): boolean => {
				return true
			},
			...modalPropsTemp,
		}

		return (
			<div>
				<ARFilter>
					<FormItem
						label={"课程名称"}
						name="courseName"
					>
						<Input />
					</FormItem>
					<FormItem
						label={"学院"}
						name="college"
					>
						<Input />
					</FormItem>
					<FormItem
						label={"教师"}
						name="teacher"
					>
						<Input />
					</FormItem>
				</ARFilter>

				<ARTable {...tableProps}>
					<Button
						icon={<PlusCircleOutlined />}
						onClick={(): any => {
							modalProps.setIsModalVisible(true)
							Utils.event.emit('courseList-modal', { a: 123, b: 456 })
						}}
					>
						新增课程
					</Button>
				</ARTable>

				<ARModal {...modalProps}>
					<ARForm
						resetFlag={false}
						submitFlag={false}
					>
						<ARModalFormItem
							label='课程名称'
							name='courseName'
							rules={[required]}
						>
							<Input />
						</ARModalFormItem>
						<ARModalFormItem
							label='学院'
							name='college'
							rules={[required]}
						>
							<Input />
						</ARModalFormItem>
						<ARModalFormItem
							label='教师'
							name='teacher'
							rules={[required]}
						>
							<Input />
						</ARModalFormItem>
					</ARForm>
				</ARModal>
			</div>
		)
	}
}

export default injectIntl(Index)