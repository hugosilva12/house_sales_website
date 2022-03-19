const mongoose = require('mongoose')
const fuzzy_searching = require('mongoose-fuzzy-searching')

const { Schema } = mongoose

const articleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	tipo: {
		type: String
	},
	distrito: {
		type: String
	},
	concelho: {
		type: String
	},
	description: {
		type: String
	},
	price: {
		type: String
	},
	area: {
		type: Number
	},
	rooms: {
		type: Number
	},
	wc: {
		type: Number
	},


	updated: {
		type: Date,
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	props: new Schema({
		readTime: {
			type: Number,
			default: 10
		}
	}),
	tags: [{ type: String, lowercase: true, trim: true }],
	
	images: [String]
})

articleSchema.pre('save', function (next) {
	if (this.isNew) {
		this.created = Date.now
		this.updated = Date.now
	} else {
		this.updated = Date.now
	}
	
	this.tags = this.tags.reduce((result, tag) => {
		const tagArray = tag.split(',').map(t => t.trim())
		result = [...result,...tagArray]
		return result
	}, [])
	next()
})

articleSchema.plugin(fuzzy_searching, {fields: ['title']})

module.exports = mongoose.model('Article', articleSchema)