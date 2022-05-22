import { ServiceError, callService } from '../../service'

const ServiceURL = 'https://api-user-service-th4n4u7taa-an.a.run.app'

/**
 * call api
 * @param {string} api
 * @param {string} idToken
 * @param {Object} data
 * @returns {Promise<any>}
 */
const call = function(api, idToken, data = {}) {
    return callService(`${ServiceURL}/api/${api}`, idToken, data)
    .then(res => {
        return new Promise((resolve, reject) => {
            if (res.ok) resolve(res.result)
            else reject(new ServiceError(res.error_code, res.description))
        })
    })
}

/**
 * get user
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id and user
 */
const getUser = function(idToken, userID) {
    return call('getUser', idToken, {
        'user_id': userID
    })
}

/**
 * get invitation code
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id, invitation_code_id and invitation_code
 */
const getInvitationCode = function(idToken, userID) {
    return call('getInvitationCode', idToken, {
        'user_id': userID
    })
}

/**
 * is invitation code exist
 * @param {string} idToken
 * @param {string} invitationCode
 * @returns {Promise<Object>} invitation_code_id and is_exist
 */
const isInvitationCodeExist = function(idToken, invitationCode) {
    return call('isInvitationCodeExist', idToken, {
        'invitation_code_id': invitationCode
    })
}

/**
 * get level
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id and user_level
 */
const getUserLevel = function(idToken, userID) {
    return call('getUserLevel', idToken, {
        'user_id': userID
    })
}

/**
 * get user stores
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id, store_ids and stores
 */
const getUserStores = function(idToken, userID) {
    return call('getUserStores', idToken, {
        'user_id': userID
    })
}

/**
 * get store
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and store
 */
const getStore = function(idToken, storeID) {
    return call('getStore', idToken, {
        'store_id': storeID
    })
}

/**
 * set store
 * @param {string} idToken
 * @param {string} storeID
 * @param {Object} setData (name: string, description: string, introduction: string, photo_urls: Array<string>)
 * @returns {Promise<string>} "success"
 */
const setStore = function(idToken, storeID, setData) {
    return call('setStore', idToken, {
        'store_id': storeID,
        'set_data': setData
    })
}

/**
 * get store categories
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id, category_ids and categories
 */
const getStoreCategories = function(idToken, storeID) {
    return call('getStoreCategories', idToken, {
        'store_id': storeID
    })
}

/**
 * get store items
 * @param {string} idToken
 * @param {string} storeID
 * @param {boolean} onlyPublished
 * @returns {Promise<Object>} store_id, item_ids and items
 */
const getStoreItems = function(idToken, storeID, onlyPublished) {
    return call('getStoreItems', idToken, {
        'store_id': storeID,
        'only_published': onlyPublished
    })
}

/**
 * get category
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} categoryID
 * @returns {Promise<Object>} store_id, category_id and category
 */
const getCategory = function(idToken, storeID, categoryID) {
    return call('getCategory', idToken, {
        'store_id': storeID,
        'category_id': categoryID
    })
}

/**
 * get category items
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} categoryID
 * @param {boolean} onlyPublished
 * @returns {Promise<Object>} store_id, category_id, item_ids and items
 */
const getCategoryItems = function(idToken, storeID, categoryID, onlyPublished) {
    return call('getCategoryItems', idToken, {
        'store_id': storeID,
        'category_id': categoryID,
        'only_published': onlyPublished
    })
}

/**
 * get item
 * @param {string} idToken
 * @param {string} itemID
 * @returns {Promise<Object>} item_id and item
 */
const getItem = function(idToken, itemID) {
    return call('getItem', idToken, {
        'item_id': itemID
    })
}

/**
 * create item
 * @param {string} idToken
 * @param {string} userID
 * @param {string} storeID
 * @param {string} name
 * @param {string} description
 * @returns {Promise<Object>} user_id, store_id and item_id
 */
const createItem = function(idToken, userID, storeID, name, description) {
    return call('createItem', idToken, {
        'user_id': userID,
        'store_id': storeID,
        'name': name,
        'description': description
    })
}

/**
 * set item
 * @param {string} idToken
 * @param {string} itemID
 * @param {Object} setData (category_ids: Array<string>, name: string, description: string, introduction: string, photo_urls: Array<string>, price: number, quantity_of_stock: number(-1: unlimited))
 * @returns {Promise<string>} "success"
 */
const setItem = function(idToken, itemID, setData) {
    return call('setItem', idToken, {
        'item_id': itemID,
        'set_data': setData
    })
}

/**
 * publish item
 * @param {string} idToken
 * @param {string} itemID
 * @returns {Promise<string>} "success"
 */
const publishItem = function(idToken, itemID) {
    return call('publishItem', idToken, {
        'item_id': itemID
    })
}

/**
 * delist item
 * @param {string} idToken
 * @param {string} itemID
 * @returns {Promise<string>} "success"
 */
const delistItem = function(idToken, itemID) {
    return call('delistItem', idToken, {
        'item_id': itemID
    })
}

/**
 * delete item
 * @param {string} idToken
 * @param {string} itemID
 * @returns {Promise<string>} "success"
 */
const deleteItem = function(idToken, itemID) {
    return call('deleteItem', idToken, {
        'item_id': itemID
    })
}

/**
 * get payment method data - store
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and data
 */
const getPaymentMethodStoreData = function(idToken, storeID) {
    return call('getPaymentMethodStoreData', idToken, {
        'store_id': storeID
    })
}

/**
 * get payment method data - tappay
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and data
 */
const getPaymentMethodTapPayData = function(idToken, storeID) {
    return call('getPaymentMethodTapPayData', idToken, {
        'store_id': storeID
    })
}

/**
 * get shipping channel data - store
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and data
 */
const getShippingChannelStoreData = function(idToken, storeID) {
    return call('getShippingChannelStoreData', idToken, {
        'store_id': storeID
    })
}

/**
 * get messenger data - telegram bot
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and data
 */
const getMessengerTelegramBotData = function(idToken, storeID) {
    return call('getMessengerTelegramBotData', idToken, {
        'store_id': storeID
    })
}

/**
 * set auto reply order time - week
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} timeZoneOffset (±hh:mm)
 * @param {Object} weekdayTimeIntervals (["0"-"6"(sunday-saturday)][n]{ start_time: string(hh:mm), end_time: string(hh:mm), action: string(accept/reject) })
 * @returns {Promise<string>} "success"
 */
const setAutoReplyOrderTime_week = function(idToken, storeID, timeZoneOffset, weekdayTimeIntervals) {
    return call('setAutoReplyOrderTime', idToken, {
        'store_id': storeID,
        'mode': 'week',
        'time_zone_offset': timeZoneOffset,
        'weekday_time_intervals': weekdayTimeIntervals
    })
}

/**
 * get auto reply order time
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and auto_accept_order_time
 */
const getAutoReplyOrderTime = function(idToken, storeID) {
    return call('getAutoReplyOrderTime', idToken, {
        'store_id': storeID
    })
}

/**
 * add create store application form
 * @param {string} idToken
 * @param {string} userID
 * @param {string} storeName
 * @param {string} ownerName
 * @param {string} ownerPhoneNumber
 * @param {string} ownerEmail
 * @param {string} storeOwnerType (company, personal)
 * @param {string} taxIDNumber
 * @param {string} storePhoneNumber
 * @param {string} storeAddress
 * @param {string} storeBankCode
 * @param {string} storeBankAccount
 * @param {string} storeWebsite
 * @param {string} telegramBotToken
 * @returns {Promise<Object>} create_store_application_form_id
 */
const addCreateStoreApplicationForm = function(idToken, userID, storeName, ownerName, ownerPhoneNumber, ownerEmail, storeOwnerType, taxIDNumber, storePhoneNumber, storeAddress, storeBankCode, storeBankAccount, storeWebsite, telegramBotToken) {
    return call('addCreateStoreApplicationForm', idToken, {
        'user_id': userID,
        'store_name': storeName,
        'owner_name': ownerName,
        'owner_phone_number': ownerPhoneNumber,
        'owner_email': ownerEmail,
        'store_owner_type': storeOwnerType,
        'tax_id_number': taxIDNumber,
        'store_phone_number': storePhoneNumber,
        'store_address': storeAddress,
        'store_bank_code': storeBankCode,
        'store_bank_account': storeBankAccount,
        'store_website': storeWebsite,
        'telegram_bot_token': telegramBotToken
    })
}

/**
 * set create store application form
 * @param {string} idToken
 * @param {string} formID
 * @param {Object} setData (store_name: string, owner_name: string, owner_phone_number: string, owner_email: string, store_owner_type: string, tax_id_number: string, store_phone_number: string, store_address: string, store_bank_code: string, store_bank_account: string, store_website: string, telegram_bot_token: string)
 * @returns {Promise<string>} "success"
 */
const setCreateStoreApplicationForm = function(idToken, formID, setData) {
    return call('setCreateStoreApplicationForm', idToken, {
        'create_store_application_form_id': formID,
        'set_data': setData
    })
}

/**
 * set create store application form photo url
 * @param {string} idToken
 * @param {string} formID
 * @param {string} photoName (bank_passbook, location_with_owner, environment_with_owner, registration_certificate, owner_id_card, owner_id_card_with_owner)
 * @param {number} photoIndex
 * @param {string} photoURL
 * @returns {Promise<string>} "success"
 */
 const setCreateStoreApplicationFormPhotoURL = function(idToken, formID, photoName, photoIndex, photoURL) {
    return call('setCreateStoreApplicationFormPhotoURL', idToken, {
        'create_store_application_form_id': formID,
        'photo_name': photoName,
        'photo_index': photoIndex,
        'photoURL': photoURL
    })
}

/**
 * submit create store application form
 * @param {string} idToken
 * @param {string} formID
 * @returns {Promise<string>} "success"
 */
 const submitCreateStoreApplicationForm = function(idToken, formID) {
    return call('submitCreateStoreApplicationForm', idToken, {
        'create_store_application_form_id': formID
    })
}

/**
 * get create store application form
 * @param {string} idToken
 * @param {string} formID
 * @returns {Promise<Object>} create_store_application_form_id and create_store_application_form
 */
 const getCreateStoreApplicationForm = function(idToken, formID) {
    return call('getCreateStoreApplicationForm', idToken, {
        'create_store_application_form_id': formID
    })
}

/**
 * get create store application forms
 * @param {string} idToken
 * @param {string} userID
 * @param {string} status (unsubmitted, submitted, accepted, rejected)
 * @returns {Promise<Object>} user_id, status, create_store_application_form_ids and create_store_application_forms
 */
 const getCreateStoreApplicationForms = function(idToken, userID, status) {
    return call('getCreateStoreApplicationForms', idToken, {
        'user_id': userID,
        'status': status
    })
}

/**
 * get payment
 * @param {string} idToken
 * @param {string} orderID
 * @param {string} paymentID
 * @returns {Promise<Object>} order_id, payment_id and payment
 */
const getPayment = function(idToken, orderID, paymentID) {
    return call('getPayment', idToken, {
        'order_id': orderID,
        'payment_id': paymentID
    })
}

/**
 * get payments
 * @param {string} idToken
 * @param {string} orderID
 * @returns {Promise<Object>} order_id, payment_ids and payments
 */
const getPayments = function(idToken, orderID) {
    return call('getPayments', idToken, {
        'order_id': orderID
    })
}

/**
 * get paid amount
 * @param {string} idToken
 * @param {string} orderID
 * @returns {Promise<Object>} order_id and amount
 */
const getPaidAmount = function(idToken, orderID) {
    return call('getPaidAmount', idToken, {
        'order_id': orderID
    })
}

/**
 * add store payment
 * @param {string} idToken
 * @param {string} orderID
 * @param {string} method (cash, cash-on-delivery, transfer)
 * @param {number} amount
 * @param {string} accountLast5Digits transfer
 * @returns {Promise<Object>} order_id and payment_id
 */
const addStorePayment = function(idToken, orderID, method, amount, accountLast5Digits) {
    return call('addStorePayment', idToken, {
        'order_id': orderID,
        'method': method,
        'amount': amount,
        'account_last_5_digits': accountLast5Digits
    })
}

/**
 * refund payment
 * @param {string} idToken
 * @param {string} orderID
 * @param {string} paymentID
 * @returns {Promise<string>} "success"
 */
const refundPayment = function(idToken, orderID, paymentID) {
    return call('refundPayment', idToken, {
        'order_id': orderID,
        'payment_id': paymentID
    })
}

/**
 * get transfer info
 * @param {string} idToken
 * @param {string} orderID
 * @param {string} transferInfoID
 * @returns {Promise<Object>} order_id, transfer_info_id and transfer_info
 */
const getTransferInfo = function(idToken, orderID, transferInfoID) {
    return call('getTransferInfo', idToken, {
        'order_id': orderID,
        'transfer_info_id': transferInfoID
    })
}

/**
 * reply transfer info
 * @param {string} idToken
 * @param {string} orderID
 * @param {string} transferInfoID
 * @param {boolean} confirm
 * @param {string} description
 * @returns {Promise<Object>} order_id, transfer_info_id and transfer_info
 */
const replyTransferInfo = function(idToken, orderID, transferInfoID, confirm, description) {
    return call('replyTransferInfo', idToken, {
        'order_id': orderID,
        'transfer_info_id': transferInfoID,
        'confirm': confirm,
        'description': description
    })
}

export default {
    call,
    getUser,
    getInvitationCode,
    isInvitationCodeExist,
    getUserLevel,
    getUserStores,
    getStore,
    setStore,
    getStoreCategories,
    getStoreItems,
    getCategory,
    getCategoryItems,
    getItem,
    createItem,
    setItem,
    publishItem,
    delistItem,
    deleteItem,
    getPaymentMethodStoreData,
    getPaymentMethodTapPayData,
    getShippingChannelStoreData,
    getMessengerTelegramBotData,
    setAutoReplyOrderTime_week,
    getAutoReplyOrderTime,
    addCreateStoreApplicationForm,
    setCreateStoreApplicationForm,
    setCreateStoreApplicationFormPhotoURL,
    submitCreateStoreApplicationForm,
    getCreateStoreApplicationForm,
    getCreateStoreApplicationForms,
    getPayment,
    getPayments,
    getPaidAmount,
    addStorePayment,
    refundPayment,
    getTransferInfo,
    replyTransferInfo
}
