 const util = {
	// validate one element
	validate(rule, message, name, value) {
		this['formData'][name] = value;
		let ruleEle = rule[name],
			msgEle = message[name],
			eleVal = this['formData'][name];

		
		// 是否相等
		if(typeof ruleEle.eqto !== 'undefined') {
			if(eleVal != this['formData'][ruleEle.eqto]) {
				this['msgData'][name] = msgEle.eqto;
				return false;
			}
			this['msgData'][name] = '';
			return true;
		}
		

		// checkBox 验证
		if(eleVal instanceof Array) {
			if(ruleEle.require) {
				if(!eleVal.length) {
					this['msgData'][name] = msgEle.require;
					return false;
				}
				this['msgData'][name] = '';
				return true;
			}
			this['msgData'][name] = '';
			return true;
		}

		// 是否必填
		if(ruleEle.require) {
			if(eleVal === '') {
				this['msgData'][name] = msgEle.require;
				return false;
			}
		} else {
			if(eleVal === '') {
				this['msgData'][name] = '';
				return true;
			}
		}


		// 远程验证
		if(typeof ruleEle.remote != 'undefined') {
			ruleEle.remote(value, (res) => {
				if(!res) {
					this['msgData'][name] = msgEle.remote;
					return false;
				}
			})

		}

		// 是否有最小值
		if(typeof ruleEle.min != 'undefined') {
			if(eleVal < ruleEle.min) {
				this['msgData'][name] = msgEle.min;
				return false;
			}
		}
		// 是否有最大值
		if(typeof ruleEle.max != 'undefined') {
			if(eleVal > ruleEle.max) {
				this['msgData'][name] = msgEle.max;
				return false;
			}
		}

		// 是否定义规则
		if(typeof ruleEle.pattern != 'undefined') {
			if(typeof ruleEle.pattern === 'object') {
				if(ruleEle.pattern.test(eleVal)) {
					this['msgData'][name] = '';
					return true;
				}else{
					this['msgData'][name] = msgEle.pattern;
					return false;
				}
			} else {
				if(ruleEle.pattern(eleVal)) {
					this['msgData'][name] = '';
					return true;
				}else {
					this['msgData'][name] = msgEle.pattern;
					return false;
				}
			}
		}
		// 所有验证规则都成立后
		this['msgData'][name] = '';
		return true;
	},
	// validate from
	validateForm (rule, message, formData) {
		let status = true;
		for(var key in formData) {
			if(!util.validate.call(this,rule, message, key, formData[key])){
				status = false;;
			}
		}
		return status;
	},
	// 获取省市中文名称
	getName(id, arr) {
		for(var i = 0; i < arr.length; i++) {
			if(id == arr[i].id){
				return arr[i].name;
			}
		}
		return '';
	}
}
export default util;