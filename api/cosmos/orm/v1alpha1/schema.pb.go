// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.1
// source: cosmos/orm/v1alpha1/schema.proto

package ormv1alpha1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	descriptorpb "google.golang.org/protobuf/types/descriptorpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// SchemaDescriptor describes an ORM schema that contains all the information
// needed for a dynamic client to decode the stored data.
type SchemaDescriptor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// files is the set of all FileDescriptorProto's needed to decode the stored data.
	// A schema imposes the constraint that every file and every table within that
	// schema have at most one instance in the store.
	Files *descriptorpb.FileDescriptorSet `protobuf:"bytes,1,opt,name=files,proto3" json:"files,omitempty"`
	// modules is the set of modules in the schema.
	Modules []*SchemaDescriptor_ModuleEntry `protobuf:"bytes,2,rep,name=modules,proto3" json:"modules,omitempty"`
}

func (x *SchemaDescriptor) Reset() {
	*x = SchemaDescriptor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cosmos_orm_v1alpha1_schema_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SchemaDescriptor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SchemaDescriptor) ProtoMessage() {}

func (x *SchemaDescriptor) ProtoReflect() protoreflect.Message {
	mi := &file_cosmos_orm_v1alpha1_schema_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SchemaDescriptor.ProtoReflect.Descriptor instead.
func (*SchemaDescriptor) Descriptor() ([]byte, []int) {
	return file_cosmos_orm_v1alpha1_schema_proto_rawDescGZIP(), []int{0}
}

func (x *SchemaDescriptor) GetFiles() *descriptorpb.FileDescriptorSet {
	if x != nil {
		return x.Files
	}
	return nil
}

func (x *SchemaDescriptor) GetModules() []*SchemaDescriptor_ModuleEntry {
	if x != nil {
		return x.Modules
	}
	return nil
}

// ModuleFileTable defines a table that is stored internally in each module
// to track the files in the schema and the IDs they are assigned.
type ModuleFileTable struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// id is the id of this FileDescriptor in
	Id uint32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	// file_name is the name of a file in the FileDescriptorSet that contains
	// table definitions.
	FileName string `protobuf:"bytes,2,opt,name=file_name,json=fileName,proto3" json:"file_name,omitempty"`
}

func (x *ModuleFileTable) Reset() {
	*x = ModuleFileTable{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cosmos_orm_v1alpha1_schema_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ModuleFileTable) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ModuleFileTable) ProtoMessage() {}

func (x *ModuleFileTable) ProtoReflect() protoreflect.Message {
	mi := &file_cosmos_orm_v1alpha1_schema_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ModuleFileTable.ProtoReflect.Descriptor instead.
func (*ModuleFileTable) Descriptor() ([]byte, []int) {
	return file_cosmos_orm_v1alpha1_schema_proto_rawDescGZIP(), []int{1}
}

func (x *ModuleFileTable) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ModuleFileTable) GetFileName() string {
	if x != nil {
		return x.FileName
	}
	return ""
}

// ModuleEntry describes a single module's schema.
type SchemaDescriptor_ModuleEntry struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// name is the name of the module. In the multi-store model this name is
	// used to locate the module's store.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// prefix is an optional prefix that precedes all keys in this module's
	// store.
	Prefix []byte `protobuf:"bytes,2,opt,name=prefix,proto3" json:"prefix,omitempty"`
	// files describes the schema files used in this module.
	Files []*SchemaDescriptor_FileEntry `protobuf:"bytes,3,rep,name=files,proto3" json:"files,omitempty"`
}

func (x *SchemaDescriptor_ModuleEntry) Reset() {
	*x = SchemaDescriptor_ModuleEntry{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cosmos_orm_v1alpha1_schema_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SchemaDescriptor_ModuleEntry) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SchemaDescriptor_ModuleEntry) ProtoMessage() {}

func (x *SchemaDescriptor_ModuleEntry) ProtoReflect() protoreflect.Message {
	mi := &file_cosmos_orm_v1alpha1_schema_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SchemaDescriptor_ModuleEntry.ProtoReflect.Descriptor instead.
func (*SchemaDescriptor_ModuleEntry) Descriptor() ([]byte, []int) {
	return file_cosmos_orm_v1alpha1_schema_proto_rawDescGZIP(), []int{0, 0}
}

func (x *SchemaDescriptor_ModuleEntry) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SchemaDescriptor_ModuleEntry) GetPrefix() []byte {
	if x != nil {
		return x.Prefix
	}
	return nil
}

func (x *SchemaDescriptor_ModuleEntry) GetFiles() []*SchemaDescriptor_FileEntry {
	if x != nil {
		return x.Files
	}
	return nil
}

// FileEntry describes an ORM file used in a module.
type SchemaDescriptor_FileEntry struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// id is a prefix that will be varint encoded and prepended to all the
	// table keys specified in the file's tables.
	Id uint32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	// file_name is the name of a file in the FileDescriptorSet that contains
	// table definitions.
	FileName string `protobuf:"bytes,2,opt,name=file_name,json=fileName,proto3" json:"file_name,omitempty"`
}

func (x *SchemaDescriptor_FileEntry) Reset() {
	*x = SchemaDescriptor_FileEntry{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cosmos_orm_v1alpha1_schema_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SchemaDescriptor_FileEntry) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SchemaDescriptor_FileEntry) ProtoMessage() {}

func (x *SchemaDescriptor_FileEntry) ProtoReflect() protoreflect.Message {
	mi := &file_cosmos_orm_v1alpha1_schema_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SchemaDescriptor_FileEntry.ProtoReflect.Descriptor instead.
func (*SchemaDescriptor_FileEntry) Descriptor() ([]byte, []int) {
	return file_cosmos_orm_v1alpha1_schema_proto_rawDescGZIP(), []int{0, 1}
}

func (x *SchemaDescriptor_FileEntry) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *SchemaDescriptor_FileEntry) GetFileName() string {
	if x != nil {
		return x.FileName
	}
	return ""
}

var File_cosmos_orm_v1alpha1_schema_proto protoreflect.FileDescriptor

var file_cosmos_orm_v1alpha1_schema_proto_rawDesc = []byte{
	0x0a, 0x20, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2f, 0x6f, 0x72, 0x6d, 0x2f, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x13, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x6f, 0x72, 0x6d, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1d, 0x63, 0x6f, 0x73, 0x6d, 0x6f,
	0x73, 0x2f, 0x6f, 0x72, 0x6d, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6f,
	0x72, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xd6, 0x02, 0x0a, 0x10, 0x53, 0x63, 0x68,
	0x65, 0x6d, 0x61, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x12, 0x38, 0x0a,
	0x05, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46,
	0x69, 0x6c, 0x65, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x53, 0x65, 0x74,
	0x52, 0x05, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x12, 0x4b, 0x0a, 0x07, 0x6d, 0x6f, 0x64, 0x75, 0x6c,
	0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x31, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f,
	0x73, 0x2e, 0x6f, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53,
	0x63, 0x68, 0x65, 0x6d, 0x61, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x2e,
	0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x6d, 0x6f, 0x64,
	0x75, 0x6c, 0x65, 0x73, 0x1a, 0x80, 0x01, 0x0a, 0x0b, 0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x70, 0x72, 0x65, 0x66,
	0x69, 0x78, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x06, 0x70, 0x72, 0x65, 0x66, 0x69, 0x78,
	0x12, 0x45, 0x0a, 0x05, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x2f, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x6f, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x44, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x52, 0x05, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x1a, 0x38, 0x0a, 0x09, 0x46, 0x69, 0x6c, 0x65, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x69, 0x6c, 0x65, 0x4e, 0x61, 0x6d,
	0x65, 0x22, 0x5f, 0x0a, 0x0f, 0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x46, 0x69, 0x6c, 0x65, 0x54,
	0x61, 0x62, 0x6c, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x69, 0x6c, 0x65, 0x4e, 0x61, 0x6d,
	0x65, 0x3a, 0x1f, 0xf2, 0x9e, 0xd3, 0x8e, 0x03, 0x19, 0x0a, 0x04, 0x0a, 0x02, 0x69, 0x64, 0x12,
	0x0f, 0x0a, 0x09, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x10, 0x01, 0x18, 0x01,
	0x18, 0x01, 0x42, 0xd6, 0x01, 0x0a, 0x17, 0x63, 0x6f, 0x6d, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f,
	0x73, 0x2e, 0x6f, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x0b,
	0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x40, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73,
	0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2f, 0x6f, 0x72, 0x6d, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x3b, 0x6f, 0x72, 0x6d, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2,
	0x02, 0x03, 0x43, 0x4f, 0x58, 0xaa, 0x02, 0x13, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x4f,
	0x72, 0x6d, 0x2e, 0x56, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x13, 0x43, 0x6f,
	0x73, 0x6d, 0x6f, 0x73, 0x5c, 0x4f, 0x72, 0x6d, 0x5c, 0x56, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0xe2, 0x02, 0x1f, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x5c, 0x4f, 0x72, 0x6d, 0x5c, 0x56,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0xea, 0x02, 0x15, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x3a, 0x3a, 0x4f, 0x72,
	0x6d, 0x3a, 0x3a, 0x56, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_cosmos_orm_v1alpha1_schema_proto_rawDescOnce sync.Once
	file_cosmos_orm_v1alpha1_schema_proto_rawDescData = file_cosmos_orm_v1alpha1_schema_proto_rawDesc
)

func file_cosmos_orm_v1alpha1_schema_proto_rawDescGZIP() []byte {
	file_cosmos_orm_v1alpha1_schema_proto_rawDescOnce.Do(func() {
		file_cosmos_orm_v1alpha1_schema_proto_rawDescData = protoimpl.X.CompressGZIP(file_cosmos_orm_v1alpha1_schema_proto_rawDescData)
	})
	return file_cosmos_orm_v1alpha1_schema_proto_rawDescData
}

var file_cosmos_orm_v1alpha1_schema_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_cosmos_orm_v1alpha1_schema_proto_goTypes = []interface{}{
	(*SchemaDescriptor)(nil),               // 0: cosmos.orm.v1alpha1.SchemaDescriptor
	(*ModuleFileTable)(nil),                // 1: cosmos.orm.v1alpha1.ModuleFileTable
	(*SchemaDescriptor_ModuleEntry)(nil),   // 2: cosmos.orm.v1alpha1.SchemaDescriptor.ModuleEntry
	(*SchemaDescriptor_FileEntry)(nil),     // 3: cosmos.orm.v1alpha1.SchemaDescriptor.FileEntry
	(*descriptorpb.FileDescriptorSet)(nil), // 4: google.protobuf.FileDescriptorSet
}
var file_cosmos_orm_v1alpha1_schema_proto_depIdxs = []int32{
	4, // 0: cosmos.orm.v1alpha1.SchemaDescriptor.files:type_name -> google.protobuf.FileDescriptorSet
	2, // 1: cosmos.orm.v1alpha1.SchemaDescriptor.modules:type_name -> cosmos.orm.v1alpha1.SchemaDescriptor.ModuleEntry
	3, // 2: cosmos.orm.v1alpha1.SchemaDescriptor.ModuleEntry.files:type_name -> cosmos.orm.v1alpha1.SchemaDescriptor.FileEntry
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_cosmos_orm_v1alpha1_schema_proto_init() }
func file_cosmos_orm_v1alpha1_schema_proto_init() {
	if File_cosmos_orm_v1alpha1_schema_proto != nil {
		return
	}
	file_cosmos_orm_v1alpha1_orm_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_cosmos_orm_v1alpha1_schema_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SchemaDescriptor); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cosmos_orm_v1alpha1_schema_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ModuleFileTable); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cosmos_orm_v1alpha1_schema_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SchemaDescriptor_ModuleEntry); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cosmos_orm_v1alpha1_schema_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SchemaDescriptor_FileEntry); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_cosmos_orm_v1alpha1_schema_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_cosmos_orm_v1alpha1_schema_proto_goTypes,
		DependencyIndexes: file_cosmos_orm_v1alpha1_schema_proto_depIdxs,
		MessageInfos:      file_cosmos_orm_v1alpha1_schema_proto_msgTypes,
	}.Build()
	File_cosmos_orm_v1alpha1_schema_proto = out.File
	file_cosmos_orm_v1alpha1_schema_proto_rawDesc = nil
	file_cosmos_orm_v1alpha1_schema_proto_goTypes = nil
	file_cosmos_orm_v1alpha1_schema_proto_depIdxs = nil
}
