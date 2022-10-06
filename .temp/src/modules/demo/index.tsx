import React, { FC, useState, useEffect } from 'react';
import { observer, inject } from "mobx-react";
import { Form } from 'antd';
import { ARForm, ARFilter, ARTable, ARModal } from '@/components';
import { PlusOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { injectIntl } from 'react-intl';
import { iModalProps } from '@/components/ARModal/type';
import { Common, Utils } from '@/assets';
import { ARFilterType, ARTableType } from '@/assets/type/ARComponent';
import { iLang, tLang } from '@/assets/type';
const FormItem: any = Form.Item;
const ARFormItem: any = ARForm.Item;
const ARModalFormItem: any = ARModal.Item;
const namespace: string = 'TestStore';

const columns: { [key: string]: any }[] = [
	{
		title: '姓名',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '年龄',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: '操作',
		dataIndex: 'operation',
		key: 'operation',
		render: (text?: { [key: string]: any }, record?: { [key: string]: any }, index?: number): any => {
			return (
				<Button
					icon={<PlusOutlined />}
					onClick={(): any => {
						Utils.event.emit('test2-modal', { test: 'test data', record })
					}
					}>
					btn
				</Button>
			)
		}
	},
]



const TestModa: any = ({ intl }: { [key: string]: any }) => {
	const name: string = 'test2-modal';
	const { param, ...rest } = ARModal.connect(name);
	const { required } = Common.Validates(intl);

	// console.log(param)
	const modalProps: any = {
		name,
		title: 'test2-modal',
		isform: true,
		onOk: (values: any): boolean => {
			console.log('values', values);
			return true;
		},
		...rest,
	}

	return (
		<ARModal {...modalProps} >
			<ARForm>
				{JSON.stringify(param)}
				<ARModalFormItem
					label="name"
					name="name"
					rules={[required]}
				>
					<Input />
				</ARModalFormItem>
			</ARForm>
		</ARModal>
	)
}


@inject(namespace)
@observer
class Index extends React.Component<any, any> {

	componentDidMount() {
		this.props.TestStore.query({});
		this.props.TestStore.ttApi && this.props.TestStore.ttApi();
	}

	render() {
		const { intl } = this.props;
		const [tablePropsTemp, modalPropsTemp, filterProps]
			= Utils.splitTableProps(this.props[namespace]);
		const { required } = Common.Validates(intl);
		const testModal: any = {
			intl,
		}

		const modalProps: iModalProps = {
			name: 'test-modal',
			title: 'test-modal',
			onOk: (values: any): boolean => {
				console.log('values', values);
				// return true;
				return false;
			},
			onCancel: (): boolean => {
				return true;
				// return false;
			},
			isform: true,
			...modalPropsTemp,
		}

		// console.log({ tablePropsTemp })
		const tableProps: ARTableType.iTableProps = {
			rowKey: ((record: any): any => record.id),
			columns,
			...tablePropsTemp,
			// pagination: {}
		}

		return (<div>
			<ARFilter {...filterProps} >
				<FormItem
					label={"name"}
					name="name"
				>
					<Input />
				</FormItem>
			</ARFilter>

			<ARTable {...tableProps} >
				<Button
					icon={<PlusOutlined />}
					onClick={(): any => {
						modalProps.setIsModalVisible(true)
						Utils.event.emit('test-modal', { test: 'test data' })
					}
					}>
					btn
				</Button>
			</ARTable>

			<ARModal {...modalProps} >
				<ARForm>
					<ARModalFormItem
						label="name"
						name="name"
						rules={[required]}
					>
						<Input />
					</ARModalFormItem>
				</ARForm>
			</ARModal>

			<TestModa {...testModal} />
		</div>)
	}
}

export default injectIntl(Index)